interface Props {
  containerName: string;
  containerImage: string;
  cpuUsage: number;
  memUsage: number;
}

export const Container = ({
  containerName,
  containerImage,
}: Props) => {
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

