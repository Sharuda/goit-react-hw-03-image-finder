import DotLoader from 'react-spinners/DotLoader';

export const Loader = () => {
  return (
    <div className="Spinner">
      <DotLoader
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
