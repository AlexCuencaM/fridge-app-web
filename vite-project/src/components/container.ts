interface GetContainerProps {
    page: HTMLElement;
}
export const setContainerPageInnerHtml = (props: GetContainerProps) => {
  if(document.getElementById("main-container")){
    document.getElementById("app")!
    .removeChild(document.getElementById("main-container")!
    );
  }
  let containerElement: HTMLDivElement = getInitialContainer();
  const container = containerElement;
  container.appendChild(props.page);
  return container;
}
export const getInitialContainer = () => {
  const container = document.createElement('div');
  container.id = "main-container";
  container.className = "container";
  return container as HTMLDivElement;
}
