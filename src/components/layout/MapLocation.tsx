import type { JSX } from 'react';

const MapLocation = (): JSX.Element => {
  return (
    <div className='max-w-[1600px] mx-auto'>
      <iframe src="https://yandex.uz/map-widget/v1/?feedback=map%2Fedit&feedback-context=map.controls&ll=69.223058%2C41.351024&utm_source=share&z=16.38" width="100%" height="350"></iframe>
    </div>
  );
};

export default MapLocation;