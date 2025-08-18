# US State-Level Heatmap Feature Plan

## Overview
Add functionality to click on the United States in the world map and display a detailed view showing US states colored by search activity.

## Current State Analysis
- **Data Available**: Database has `search_region` and `search_city` fields that contain state information
- **Current API**: Returns country-level data only
- **UI**: World map with country-level coloring
- **US Data**: 70 searches (94.6% of total) - significant enough for state breakdown

## Implementation Plan

### Phase 1: Backend API Enhancement
1. **Create new endpoint** `/api/analytics/geographic/us-states`
   - Query `search_region` field for US searches
   - Group by state and count searches
   - Return state codes (e.g., "Michigan", "California") with search counts
   - Calculate percentages within US total

2. **Enhance existing endpoint** (optional)
   - Add query parameter `?country=US` to get state-level breakdown
   - Maintain backward compatibility

### Phase 2: Frontend State Management
1. **Add view state** to `GeographicHeatmap` component
   - `viewMode`: 'world' | 'us-states'
   - `selectedCountry`: string (for future expansion)
   - Navigation breadcrumbs

2. **State transition logic**
   - Click handler for US geography
   - Back button to return to world view
   - Loading states during transitions

### Phase 3: US States Map Component
1. **Find/create US states topojson data**
   - Source from reliable CDN (e.g., `https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json`)
   - Test data quality and state property names

2. **Create `USStatesHeatmap` component**
   - Similar structure to `GeographicHeatmap`
   - State name to abbreviation mapping
   - Appropriate zoom/projection for US-only view
   - Different color scale optimized for state-level data

### Phase 4: Integration & UX
1. **Update parent component** `GeographicInsightsWithMap`
   - Handle view mode switching
   - Pass appropriate data to child components
   - Update title/breadcrumbs

2. **Enhanced interactions**
   - Click on US → zoom to US states view
   - Back button → return to world view
   - Tooltips showing state names and counts
   - Legend updates for state-level data

### Phase 5: Data Mapping & Fallbacks
1. **State name standardization**
   - Map various state name formats to standard codes
   - Handle edge cases (Washington DC, territories)
   - Fallback for unmapped regions

2. **Error handling**
   - No state data available message
   - API error states
   - Loading states during transitions

## Technical Requirements

### Dependencies
- No new dependencies needed (use existing react-simple-maps)

### Data Structure
```javascript
// New API response format
[
  {
    "state": "Michigan", 
    "state_code": "MI",
    "search_count": "25",
    "percentage": "35.7"
  },
  // ...
]
```

### Component Architecture
```
GeographicInsightsWithMap
├── GeographicHeatmap (world view)
└── USStatesHeatmap (US states view)
```

## Implementation Order
1. Backend API endpoint (1-2 hours)
2. US states topojson research/testing (30 min)
3. USStatesHeatmap component (1-2 hours)
4. View state management (1 hour)
5. Integration and testing (1 hour)
6. Polish and error handling (30 min)

**Total Estimated Time: 6-7 hours**

## Benefits
- Provides granular insights into US search distribution
- Scalable pattern for other countries in the future
- Enhanced user engagement with interactive drill-down
- Better understanding of geographic search patterns within the largest market