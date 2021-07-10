import { formatHeatmapData } from './activity-heatmap-formatter';
import { MOCK_GRID_ITEMS } from './_MOCK_GRID_ITEMS';

fdescribe('formatHeatmapData', () => {
  it('should work', () => {

    expect(formatHeatmapData(MOCK_GRID_ITEMS)).toEqual('');
  });
});
