# Timeline Component - Figma Implementation

## Overview
Created an alternate Timeline component (`TimelineAlternate.jsx`) based on a Figma design, replacing the original vertical scrolling timeline with a cleaner, more focused horizontal layout.

## Date
August 17, 2025

## Components Created

### 1. TimelineAlternate.jsx
- **Location**: `/src/components/TimelineAlternate.jsx`
- **Purpose**: New timeline component matching Figma design specifications
- **Features**:
  - Horizontal timeline with years displayed on the left sidebar
  - Fixed position with scrolling year selection
  - Event cards with red border styling
  - Support for image galleries (Google vs Baidu comparison)
  - Smooth transitions between years

### 2. TimelineComparison.jsx
- **Location**: `/src/components/TimelineComparison.jsx`
- **Purpose**: Testing component to switch between original and Figma timeline versions
- **Route**: `/timeline-comparison`

## Key Design Changes from Original

1. **Layout Orientation**
   - Changed from vertical list to horizontal layout
   - Years displayed in left sidebar instead of vertical column
   
2. **Visual Hierarchy**
   - Selected year shown in 44px bold text
   - Non-selected years in 24px gray text
   - Red dot indicator for current selection
   
3. **Navigation**
   - Simplified up/down arrow buttons
   - Click-to-select year functionality
   - Smooth scrolling animation (300ms ease-in-out)
   
4. **Event Display**
   - Card-based design with gray background (#F5F7F9)
   - Red border (#E81717) for emphasis
   - Cleaner typography and spacing

## Issues Fixed

### Issue #1: Year Alignment with Red Dot
**Problem**: Red dot indicator was not properly aligned with the year text
**Solution**: 
- Changed from fixed positioning to dynamic positioning within year items
- Red dot now moves with selected year at `right-[-9px]`
- Vertically centered using `top-1/2 -translate-y-1/2`
- File: `TimelineAlternate.jsx` lines 195-196

### Issue #2: Vertical Timeline Gap/Haze
**Problem**: Visual gap or haze effect in the vertical timeline
**Solution**:
- Adjusted gradient overlay width from 120px to 100px to not overlap timeline
- Changed gradient positioning to only affect year text area
- File: `TimelineAlternate.jsx` line 269

### Issue #3: Timeline Connection to Bottom Arrow
**Problem**: Vertical timeline didn't connect to bottom navigation arrow
**Solution**:
- Extended timeline height from 408px to 420px
- Adjusted starting position to ensure full connection
- File: `TimelineAlternate.jsx` line 148

### Issue #4: Event Content Top Padding
**Problem**: Excessive top padding on event content area
**Solution**:
- Reduced padding from `pt-[200px]` to `pt-[120px]`
- Better visual alignment with timeline
- File: `TimelineAlternate.jsx` line 206

## Technical Implementation

### State Management
```javascript
const [currentIndex, setCurrentIndex] = useState(0);
```
- Tracks currently selected year index
- Controls year scrolling and event display

### Year Navigation
```javascript
style={{
  transform: `translateY(${180 - (currentIndex * 72)}px)`
}}
```
- Each year item has 72px height
- Scrolls to center selected year at 180px offset

### Data Structure
- 17 historical events (1989-2024)
- Each event contains:
  - `year`: Number
  - `title`: Event headline
  - `description`: Optional detailed text
  - `images`: Array for Google/Baidu comparison images

## Styling Approach

### Colors
- Primary Red: `#E81717` (borders, indicators)
- Background Gray: `#F5F7F9` (event cards)
- Text Gray: `#8D969E` (non-selected years)
- Timeline Gray: `#E5E7EB` (gray-300)

### Responsive Design
- Fixed 928px max width
- 600px event card width
- 105px year sidebar width
- Maintains layout on different screen sizes

## Testing

### Visual Testing with Playwright
- Used Playwright browser automation for visual verification
- Route: `http://localhost:3000/timeline-comparison`
- Screenshots captured for each fix validation
- Files saved in `.playwright-mcp/` directory

### Test Commands Used
```bash
# Navigate to timeline comparison page
mcp__playwright__browser_navigate -> /timeline-comparison

# Take screenshots for verification
mcp__playwright__browser_take_screenshot -> timeline-*.png

# Click Figma Timeline button to test
mcp__playwright__browser_click -> "Figma Timeline"
```

## File Structure
```
/client/src/components/
├── Timeline.jsx              # Original component
├── TimelineAlternate.jsx     # New Figma-based component
└── TimelineComparison.jsx    # Testing comparison component
```

## Next Steps

### Potential Enhancements
1. Add actual images for historical events (currently using placeholders)
2. Implement keyboard navigation (arrow keys)
3. Add touch/swipe support for mobile
4. Include animation for red dot transitions
5. Add hover effects on year selections

### Integration Considerations
1. Route configuration in `index.js` already complete
2. Can replace original Timeline component when ready
3. Consider A/B testing both versions
4. May need to adjust for different screen sizes

## Dependencies
- React 18.2.0
- Tailwind CSS 3.4.3
- No additional libraries required

## Performance Notes
- Smooth 300ms transitions for year scrolling
- Fixed height containers prevent layout shifts
- Z-index layering properly configured (arrows: z-10, red dot: z-20)