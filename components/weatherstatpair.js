import styles from '../styles/weatherstatpair.module.css';


export default function WeatherStatPair(props) {
    const key = props.pkey;
    const value = props.value;
    const um = props.um || ''; // unity of measure
    return (
      <>
        <span className={styles.key}>{key}: </span>
        <span className={styles.value}>{value} {um}</span>
      </>
    )
}