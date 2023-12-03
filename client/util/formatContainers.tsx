import Container from '../components/Pod/Container';

/**
 * Formats the pods of a node into a list of JSX elements.
 * @param containers - The pods of a node.
 * @returns A list of JSX elements.
 */
const formatContainers = (containers: any[] = []) => {
  return containers.map((container: any) => {
    return (
      <Container
        containerName={container.name}
        containerImage={container.image}
        cpuUsage={container.cpuUsage}
        memUsage={container.memUsage}
        key={container.name}
      />
    );
  });
};

export default formatContainers;
