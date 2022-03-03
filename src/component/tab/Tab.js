export const Tab = (props) => {

  const { className, label, image, isActive, small, onClick, tabIndex } = props;

  const tabClass = `tabs-tab ${className}`;
  const linkClass = isActive ? 'tabs-active' : '';

  return (
    <li key={tabIndex} className={`${tabClass} ${linkClass}`}>
      <a onClick={onClick} className={`flex-row py-2 px-3 ${linkClass}`}>
        <span className="pe-2 aling-items-end">
          <img src={image} alt={label} fill={'red'} />
        </span>
        <span>
          <small>{small}</small>
          <span className="tab-title">{label}</span>
        </span>
      </a>
    </li>
  );
};