import Link from 'next/link';
import styles from './UserCard.module.css';
import Image from 'next/image';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className={styles.card}>
        <Image
          src={image ?? '/mememan.png'}
          className={styles.cardImage}
          width={216}
          height={30}
          alt={`${name}'s profile`}
        />
      <div className={styles.cardContent}>
        <h3>
          <Link href={`/users/${id}`}>{name ?? 'Unknown'}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
