import styles from "./ProfileCard.module.css"


interface Props {
  avatar: string;
  name: string;
  description: string;
}

export default function ProfileCard(props: Props) {
  const { avatar, name, description } = props;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="User avatar" style={{ maxWidth: 400 }} />
      <h2 className={styles.profileName}>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

// export const ProfileCard: FC<Props> = ({name, description,avatar}) => {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <p>{description}</p>
//         <img src={avatar} alt="User profile" style={{maxWidth:400/>
//     </div>
//   )
// }

// Разные подходы к стилизации проложения
// BEM - CSS modules - Tailwind/Bootstrap - css in js Styled components