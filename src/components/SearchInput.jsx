import React, { useRef, useState, useCallback } from 'react';

function SearchInput() {
  const [isLoading, setLoading] = useState(false);
  const [imageResults, setImageResults] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [translation, setTranslation] = useState('');
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const ref = useRef();

  const handleSubmit = async () => {
    console.log('submitting');
    setLoading(true);
    const query = ref.current.value;
    setSearchQuery(query);
    try {
      const response = await fetch(`/images`, {
        method: 'post',
        headers: { 
          'Accept': 'application/json' ,
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ query }),
      });
      const { googleResults, baiduResults, translation, searchId } = await response.json();
      setSearchId(searchId);
      setResults({ googleResults, baiduResults });
      setTranslation(translation);
    } catch (e) {
      setResults({ googleResults: [], baiduResults: [] });
      setTranslation(e);
      ref.current.value = ''; // Reset search bar text
    } finally {
      setLoading(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  }

  return (
    <section className="flex overflow-hidden flex-col justify-center py-32 w-full bg-white max-md:py-24 max-md:max-w-full">
      <h1 className="flex flex-col w-full text-7xl font-medium leading-tight text-center tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
        <span className="text-black border-black max-md:max-w-full max-md:text-4xl">Search results</span>
        <span className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">搜索结果</span>
      </h1>
      <div className="flex overflow-hidden flex-col self-center mt-20 max-w-[720px] w-[720px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-red-600 max-md:max-w-full">
          <div className="flex items-center self-stretch my-auto min-w-[240px]">
            <div className="flex flex-col justify-center items-center self-stretch px-9 py-2 my-auto rounded border-t border-l border-solid bg-slate-100 border-l-red-600 border-t-red-600 w-[148px] max-md:px-5">
              <div className="flex gap-2 items-start">
                <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/555ea37e28eecdbc0c71637c67fbc9d8316d23ddb378fa1a8c4de0af8663ae8a?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain self-stretch my-auto w-6 aspect-square" alt="" />
                </div>
                <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b27209372ed08a64777dffd2bd7338a6b9b28a9ba9c1c924f4026a03bc35c94d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain self-stretch my-auto w-6 aspect-square" alt="" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-8 py-2.5 my-auto text-2xl font-medium tracking-widest leading-none text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-red-600 border-solid min-h-[48px] w-[148px] max-md:px-5">
              Archive
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e44faad56119be4a87fa40f7fc6343fb5346f6400ec631e458ecc5b7e615d1f?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
        </div>
        <div className="flex flex-col justify-center p-5 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap w-full bg-white rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
            <input placeholder="Search" name="query" type="text" ref={ref} onKeyDown={handleKeyDown} disabled={!!isLoading} className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] text-zinc-400 max-md:max-w-full" aria-label="Search query" />
            <div className="flex overflow-hidden gap-1 justify-center items-center py-4 pr-4 h-full">
              <button onClick={handleSubmit} disabled={!!isLoading}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f33999b9b8ec3b2f74e5e24edd17f41d1fad1b6b365248dd2ed9a740e3744a?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/216f564c4801fcaa8fac3daa15deef545dbb61fc0d65c03bdd675e08e11dadeb?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" /> {isLoading}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchInput;