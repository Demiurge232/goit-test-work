import { Circles } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Circles
      height="80"
      width="80"
      color=" #766A92"
      ariaLabel="circles-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
export default Spinner;
