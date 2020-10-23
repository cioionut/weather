export default function TempDegree(props) {
    const intValue = Math.floor(props.value);
    return (
      <>
        {intValue}{String.fromCharCode(176)}
      </>
    )
}