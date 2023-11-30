interface ContainerProps {
  containerName: string;
  containerImage: string;
}

const Container = ({ containerName, containerImage }: ContainerProps) => {
  return (
    // Rename Class
    <div className="containerBucketOuter">
      <div className="containerName">name: {containerName}</div>
      <div className="containerImage"> image: {containerImage}</div>
    </div>
  );
};

export default Container;
