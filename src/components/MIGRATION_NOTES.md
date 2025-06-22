# Event Components Migration Plan

## Current State
- 20 individual event components with hardcoded data
- Each component has similar structure but different content
- Components are imported individually in ShowEvent.jsx

## Migration Strategy
1. Created EventDetail.jsx - a generic component that renders event data
2. Created eventsData.js - centralized data file for all events
3. Updated ShowEvent.jsx to support both old and new approaches
4. Gradually migrate each event component's data to eventsData.js
5. Remove individual components once migrated

## Benefits
- Reduces code duplication from 20 files to 1 component + 1 data file
- Easier to maintain and update event information
- Consistent UI/UX across all events
- Better performance (less code to bundle)

## Migration Status
- [x] Megha - Migrated and component removed
- [ ] Marymount
- [ ] OsloTaiwan
- [ ] Reactions
- [ ] FeaturedBbc
- [ ] ApexYouth
- [ ] CreativeHack
- [ ] ProxyPals
- [ ] NetworkedFem
- [ ] GroupRvcc
- [ ] OsloMiami
- [ ] RampGallery
- [ ] VbkoVienna
- [ ] BorderControl
- [ ] HongKongNotFound
- [ ] OffEighteen
- [ ] OffNyc
- [ ] OffSeventeen
- [ ] SerendipityAus
- [ ] Inaugural
- [ ] LanYu