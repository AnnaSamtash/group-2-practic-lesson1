import style from './ForbesList.module.css';
import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';

export const ForbesList = ({ forbes }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(({ id, avatar, name, capital, isIncrease }) => (
          <li className={style.item} key={id}>
            <ForbesListItem
              avatar={avatar}
              name={name}
              capital={capital}
              isIncrease={isIncrease}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
