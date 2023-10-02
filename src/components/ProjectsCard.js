export default function ProjectCard(props) {
  console.log(props);
  return (
    <div class="card my-2">
      <div class="card-body p-0">
        <h5 class="card-title">{props.header}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          {props.subheader}
        </h6>
        <p class="card-text">{props.text}</p>
        <a href="#" class="card-link">
          {props.link1}
        </a>
        <a href="#" class="card-link">
          {props.link2}
        </a>
      </div>
    </div>
  );
}
