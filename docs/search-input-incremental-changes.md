# Search Input Incremental Design Changes

## Overview
This document tracks the incremental changes being made to the existing SearchInput component to implement the new design, starting from the current tab-based layout.

## Current State (Before Changes)
- Red bordered container with two tabs
- Left tab: Google + Baidu logos
- Right tab: "Archive" text
- Question mark icon positioned to the right of both tabs
- Gray search container below with input field and search button

## Planned Changes (Step by Step)

### ✅ Step 1: Initial Layout Restructure
**Completed**: 2025-06-22

**Changes Made:**
1. Keep the red bordered container ✅
2. Remove the center "Archive" area ✅
3. Move the question mark icon into the left area with the Google/Baidu logos ✅
4. The left tab should stay a tab ✅
5. Directly to the right of the tab there be a link to Archive_grayscale.png icon and "search archive" text ✅

**Implementation Details:**
- Added `ArchiveGrayscale` import from `@src/assets/icons/Archive_grayscale.png`
- Modified the left tab to use `flex items-center gap-2` layout
- Moved `QuestionIcon` inside the left tab container
- Replaced the Archive tab with a simple link: `<div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer text-sm">`
- Added archive icon and "search archive" text to the link

**Files Modified:**
- `/src/components/SearchInput.jsx` - Main layout restructure

### ✅ Step 2: Enhanced Input Styling
**Completed**: 2025-06-22

**Changes Made:**
6. Add darker gray border around input and search icon ✅
7. Ensure integrated look so they feel like one component ✅

**Implementation Details:**
- Changed outer container border from `border border-solid border-neutral-300` to `border-2 border-solid border-gray-400`
- Removed individual borders from input field (`border-none` instead of `border-left border-y border-solid border-neutral-300`)
- Added `border-l-2 border-gray-400` to create visual separation between input and button
- Added `overflow-hidden` to container for clean edges
- Increased button width from `w-10` to `w-14` for better proportions
- Made button height match container exactly (`h-[56px]`)
- Added subtle hover state (`hover:bg-gray-50`) to button
- Ensured both input and button share the same white background

**Visual Result:**
- Input field and search button now appear as one unified component
- Darker gray border (gray-400) provides better definition
- Internal border separator maintains visual clarity
- Hover effects provide better user feedback

### ✅ Step 3: Input Refinements & Compare Label
**Completed**: 2025-06-22

**Changes Made:**
8. Remove visual separation between input and search button ✅
9. Make input border thinner ✅
10. Add "Compare" text between logos and question mark ✅
11. Move logos closer together ✅

**Implementation Details:**
- Removed `border-l-2 border-gray-400` from button container to eliminate separation
- Changed outer border from `border-2` to `border` for thinner appearance
- Added conditional "Compare" text: `{!isArchive && (<span className="font-semibold text-red-600 ml-2">Compare</span>)}`
- Text only shows in compare mode (not archive mode)
- Used red color (`text-red-600`) and semibold weight to match design theme
- Added `ml-2` for proper spacing from logos
- Changed logo container gap from `gap-2` to `gap-1` for tighter spacing

**Visual Result:**
- Input and button now appear as one seamless component
- Thinner border provides cleaner appearance
- "Compare" label clearly indicates current mode
- Logos positioned closer together for better visual grouping
- Text hierarchy: Logos → "Compare" → Question mark

**MILESTONE**: Compare mode design complete ✅

### 🔄 Step 4: [Next Changes]
**Status**: Pending

**Planned Changes:**
- [To be defined based on next iteration feedback]

## Design Goals
- Maintain existing functionality while improving visual hierarchy
- Keep the tab-based approach for the main search mode
- Simplify navigation to archive mode
- Preserve red color scheme and border styling
- Ensure responsive design remains intact

## Technical Notes
- All changes are being made directly to the existing `SearchInput.jsx` component
- No new components being created for this incremental approach
- Preserving all existing props, state management, and API integration
- Maintaining backward compatibility with existing usage

## Testing Checklist
- [ ] Compare mode functionality works correctly
- [ ] Archive mode functionality works correctly  
- [ ] Navigation between modes works
- [ ] Responsive design maintains integrity
- [ ] Tooltip functionality for question mark works
- [ ] Hover states work correctly
- [ ] Build passes without errors