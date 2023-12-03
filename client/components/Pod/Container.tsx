interface ContainerProps {
  containerName: string;
  containerImage: string;
  cpuUsage: number;
  memUsage: number;
}

const Container = ({
  containerName,
  containerImage,
  cpuUsage,
  memUsage,
}: ContainerProps) => {
  return (
    // Rename Class
    <div className="containerBucketOuter">
      <div className="containerName">name: {containerName}</div>
      <div className="containerImage"> image: {containerImage}</div>
      <div>{0}</div>
      <div>{0}</div>
    </div>
  );
};

export default Container;
