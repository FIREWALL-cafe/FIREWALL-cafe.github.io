import React, { useState, useEffect } from 'react';
import VoteButton from './VoteButton';
import { locationMapping } from '../constants/locations';

function FilterControls({ onUpdate, isOpen, isLoading }) {
  const [shouldResetVotes, setShouldResetVotes] = useState(false);
  const [usStatesData, setUsStatesData] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    country: null,
    usState: null,
    source: null
  });

  // Dynamic country list from database
  const [countries, setCountries] = useState([]);
  
  // Dynamic search locations from database
  const [searchLocations, setSearchLocations] = useState([]);
  
  // Get unique city keys and sort them by their display names (keeping for backward compatibility)
  const uniqueCityKeys = [...new Set(Object.keys(locationMapping))]
    .sort((a, b) => locationMapping[a].localeCompare(locationMapping[b]));

  const vote_categories = ['votes_censored', 'votes_uncensored', 'votes_bad_translation', 'votes_good_translation', 'votes_lost_in_translation'];

  // Fetch countries and search locations data when component mounts  
  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch('/api/countries');
        if (response.ok) {
          const data = await response.json();
          // Filter out entries without country codes and format for dropdown
          const formattedCountries = data
            .filter(country => country.code && country.name)
            .map(country => ({
              code: country.code,
              name: country.name,
              search_count: country.search_count
            }))
            .sort((a, b) => b.search_count - a.search_count); // Sort by search count descending
          setCountries(formattedCountries);
        }
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    const fetchSearchLocationsData = async () => {
      try {
        const response = await fetch('/api/search-locations');
        if (response.ok) {
          const data = await response.json();
          // Filter out automated scrapers and format for dropdown
          const formattedLocations = data
            .filter(location => location.search_location && 
                    location.search_location !== 'automated_scraper' && 
                    location.search_location !== 'nyc3')
            .map(location => ({
              value: location.search_location,
              label: location.search_location,
              search_count: location.search_count
            }))
            .sort((a, b) => b.search_count - a.search_count); // Sort by search count descending
          setSearchLocations(formattedLocations);
        }
      } catch (error) {
        console.error('Error fetching search locations data:', error);
        // Fallback to location mapping if API fails
        const fallbackLocations = Object.entries(locationMapping)
          .filter(([key]) => key !== 'automated_scraper')
          .map(([key, value]) => ({
            value: value,
            label: value,
            search_count: 0
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setSearchLocations(fallbackLocations);
      }
    };

    const fetchUSStatesData = async () => {
      try {
        setLoadingStates(true);
        const response = await fetch('/api/analytics/geographic/us-states');
        if (response.ok) {
          const data = await response.json();
          setUsStatesData(data);
        }
      } catch (error) {
        console.error('Error fetching US states data:', error);
      } finally {
        setLoadingStates(false);
      }
    };

    // Fetch countries and search locations once when component mounts
    if (countries.length === 0) {
      fetchCountriesData();
    }
    if (searchLocations.length === 0) {
      fetchSearchLocationsData();
    }

    if (isOpen) {
      fetchUSStatesData();
      
      // Check current form values when opening
      const form = document.getElementById('filter-options-form');
      if (form) {
        const countriesSelect = form.querySelector('select[name="countries"]');
        const citiesSelect = form.querySelector('select[name="cities"]');
        const usStatesSelect = form.querySelector('select[name="us_states"]');
        
        const newActiveFilters = { country: null, usState: null, source: null };
        
        if (countriesSelect && countriesSelect.value) {
          const country = countries.find(c => c.code === countriesSelect.value);
          newActiveFilters.country = country ? country.name : null;
          setSelectedCountry(countriesSelect.value);
        }
        
        if (citiesSelect && citiesSelect.value) {
          // Check if it's an old locationMapping key or a direct search_location value
          newActiveFilters.source = locationMapping[citiesSelect.value] || citiesSelect.value;
        }
        
        if (usStatesSelect && usStatesSelect.value) {
          newActiveFilters.usState = usStatesSelect.value;
        }
        
        setActiveFilters(newActiveFilters);
      }
    }
  }, [isOpen]);

  const metaKeyToId = {
    votes_censored: 1,
    votes_uncensored: 2,
    votes_bad_translation: 3,
    votes_good_translation: 4,
    votes_lost_in_translation: 5,
    votes_bad_result: 6,
    votes_nsfw: 7,
  }

  const voteHandler = (voteCategory) => {
    let votebtn = document.getElementById(voteCategory);
    votebtn.value = votebtn.value === metaKeyToId[voteCategory] ? '' : metaKeyToId[voteCategory];
    handleFilterChange();
  }

  const handleFilterChange = (event) => {
    const form = document.getElementById('filter-options-form');
    if (!form) return;
    
    const formData = new FormData(form);
    const filterOptions = { 
      vote_ids: [], 
      years: [], 
      cities: [],
      us_states: [],
      countries: [],
      page: 1,
      page_size: 10
    };
    
    // Reset other dropdowns based on which one changed
    const countriesSelect = form.querySelector('select[name="countries"]');
    const citiesSelect = form.querySelector('select[name="cities"]');
    const usStatesSelect = form.querySelector('select[name="us_states"]');
    
    if (event && event.target && event.target.name === 'countries') {
      citiesSelect.value = ''; // Reset Source dropdown
      if (usStatesSelect) {
        usStatesSelect.value = ''; // Reset US States dropdown only if it exists
      }
      
      if (countriesSelect.value) {
        filterOptions.countries = [countriesSelect.value];
        setSelectedCountry(countriesSelect.value);
        const country = countries.find(c => c.code === countriesSelect.value);
        setActiveFilters(prev => ({ ...prev, country: country ? country.name : null, usState: null, source: null }));
        
        // If not US, clear states data
        if (countriesSelect.value !== 'US') {
          filterOptions.us_states = [];
        }
      } else {
        setSelectedCountry('');
        setActiveFilters(prev => ({ ...prev, country: null, usState: null }));
      }
    } else if (event && event.target && event.target.name === 'cities') {
      countriesSelect.value = ''; // Reset Country dropdown
      if (usStatesSelect) {
        usStatesSelect.value = ''; // Reset US States dropdown only if it exists
      }
      setSelectedCountry('');
      if (citiesSelect.value) {
        filterOptions.cities = [citiesSelect.value];
        // Handle both old location mapping keys and direct search_location values
        const sourceLabel = locationMapping[citiesSelect.value] || citiesSelect.value;
        setActiveFilters(prev => ({ ...prev, source: sourceLabel, country: null, usState: null }));
      } else {
        setActiveFilters(prev => ({ ...prev, source: null }));
      }
    } else if (event && event.target && event.target.name === 'us_states') {
      citiesSelect.value = ''; // Reset Source dropdown
      // Don't reset country since US states depend on US being selected
      if (usStatesSelect && usStatesSelect.value) {
        filterOptions.us_states = [usStatesSelect.value];
        filterOptions.countries = ['US']; // Ensure US is selected
        setActiveFilters(prev => ({ ...prev, usState: usStatesSelect.value, source: null }));
      } else {
        setActiveFilters(prev => ({ ...prev, usState: null }));
      }
    }

    // Get current values from all form fields if no specific event triggered this
    if (!event || !event.target) {
      if (countriesSelect && countriesSelect.value) {
        filterOptions.countries = [countriesSelect.value];
      }
      if (citiesSelect && citiesSelect.value) {
        filterOptions.cities = [citiesSelect.value];
      }
      if (usStatesSelect && usStatesSelect.value) {
        filterOptions.us_states = [usStatesSelect.value];
      }
      
      // Update active filters based on current form state
      const newActiveFilters = { country: null, usState: null, source: null };
      if (countriesSelect && countriesSelect.value) {
        const country = countries.find(c => c.code === countriesSelect.value);
        newActiveFilters.country = country ? country.name : null;
      }
      if (citiesSelect && citiesSelect.value) {
        // Handle both old location mapping keys and direct search_location values
        newActiveFilters.source = locationMapping[citiesSelect.value] || citiesSelect.value;
      }
      if (usStatesSelect && usStatesSelect.value) {
        newActiveFilters.usState = usStatesSelect.value;
      }
      setActiveFilters(newActiveFilters);
    }
    
    // Get vote values
    for (let [key, value] of formData.entries()) {
      if (key.startsWith('votes') && value) {
        filterOptions.vote_ids.push(value);
      }
    }
    
    // Pass false as second argument to prevent closing
    onUpdate(filterOptions, false);
  };

  const handleReset = () => {
    const form = document.getElementById('filter-options-form');
    form.reset();

    setShouldResetVotes(true);
    setSelectedCountry(''); // Reset selected country
    setActiveFilters({ country: null, usState: null, source: null }); // Reset active filters
    setTimeout(() => {
      setShouldResetVotes(false);
      // Pass false as second argument to prevent closing
      onUpdate({ 
        vote_ids: [], 
        years: [], 
        cities: [],
        us_states: [],
        countries: [],
        page: 1,
        page_size: 10
      }, false, true);
    }, 100);
  };
  
  return (
    <div className={`
      mx-auto w-full max-w-[720px] bg-white border border-red-600 rounded-md overflow-hidden transition-all duration-300 ease-in-out
      ${isOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 border-0'}
    `}>
      <div className="p-4">
        {/* Active Filters Section */}
        {(activeFilters.country || activeFilters.source || activeFilters.usState) && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-semibold mb-2">Active Filters:</div>
            <div className="flex flex-wrap gap-2">
              {activeFilters.country && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs flex items-center gap-2">
                  Country: {activeFilters.country}
                  <button 
                    onClick={() => {
                      const countriesSelect = document.querySelector('select[name="countries"]');
                      if (countriesSelect) {
                        countriesSelect.value = '';
                        handleFilterChange({ target: { name: 'countries', value: '' } });
                      }
                    }}
                    className="text-blue-600 hover:text-blue-800 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
              {activeFilters.usState && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs flex items-center gap-2">
                  State: {activeFilters.usState}
                  <button 
                    onClick={() => {
                      const usStatesSelect = document.querySelector('select[name="us_states"]');
                      if (usStatesSelect) {
                        usStatesSelect.value = '';
                        handleFilterChange({ target: { name: 'us_states', value: '' } });
                      }
                    }}
                    className="text-green-600 hover:text-green-800 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
              {activeFilters.source && (
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs flex items-center gap-2">
                  Source: {activeFilters.source}
                  <button 
                    onClick={() => {
                      const citiesSelect = document.querySelector('select[name="cities"]');
                      if (citiesSelect) {
                        citiesSelect.value = '';
                        handleFilterChange({ target: { name: 'cities', value: '' } });
                      }
                    }}
                    className="text-purple-600 hover:text-purple-800 font-bold"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
        
        <form id="filter-options-form" className="grow flex flex-col text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Country and US States Section */}
            <div className="flex flex-col">
              <label htmlFor="countries" className="text-lg font-black mb-2 flex items-center gap-2">
                Country
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-normal">Primary</span>
              </label>
              <select 
                name="countries"
                className="w-full border border-zinc-400 rounded p-2"
                onChange={(e) => handleFilterChange(e)}
                disabled={isLoading}
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.search_count})
                  </option>
                ))}
              </select>
              
              {/* US States Section - Slides down when US is selected */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                selectedCountry === 'US' ? 'max-h-40 mt-3' : 'max-h-0'
              }`}>
                <div className="bg-blue-50/30 p-3 rounded border-l-4 border-blue-200">
                  <label htmlFor="us_states" className="text-lg font-black mb-2 flex items-center gap-2">
                    <span className="text-blue-600">↳</span> US State
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-normal">Secondary</span>
                  </label>
                  <select
                    name="us_states"
                    className="w-full border border-zinc-400 rounded p-2"
                    onChange={(e) => handleFilterChange(e)}
                    disabled={isLoading || loadingStates}
                  >
                    <option value="">All States</option>
                    {usStatesData.map((stateData) => (
                      <option key={stateData.state} value={stateData.state}>
                        {stateData.state} ({stateData.search_count})
                      </option>
                    ))}
                  </select>
                  {loadingStates && (
                    <div className="text-xs text-gray-500 mt-1">Loading states...</div>
                  )}
                </div>
              </div>
            </div>

            {/* Sources Section */}
            <div className="flex flex-col">
              <label htmlFor="cities" className="text-lg font-black mb-2">Search Source</label>
              <select
                name="cities"
                className="w-full border border-zinc-400 rounded p-2"
                onChange={(e) => handleFilterChange(e)}
                disabled={isLoading}
              >
                <option value="">All Sources</option>
                {searchLocations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label} ({location.search_count})
                  </option>
                ))}
                {/* Fallback to old location mapping if new data isn't loaded */}
                {searchLocations.length === 0 && uniqueCityKeys.map((cityKey) => (
                  <option key={cityKey} value={cityKey}>
                    {locationMapping[cityKey]}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Vote Results Section */}
            <div className="border-t border-gray-200 pt-3 hidden">
              <label htmlFor="vote" className="text-lg font-black block mb-3">Vote Result</label>
              <div className="flex gap-2 flex-wrap mb-4">
                {vote_categories.map((category, index) => (
                  <VoteButton 
                    key={index} 
                    voteCategory={category} 
                    voteHandler={voteHandler} 
                    isDisabled={false} 
                    setDisabled={() => {}} 
                    shouldReset={shouldResetVotes}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Close/Clear buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              {(activeFilters.country || activeFilters.source || activeFilters.usState) && (
                <span className="text-sm text-gray-600">
                  {Object.values(activeFilters).filter(Boolean).length} filter{Object.values(activeFilters).filter(Boolean).length !== 1 ? 's' : ''} active
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <button 
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear All
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterControls; 