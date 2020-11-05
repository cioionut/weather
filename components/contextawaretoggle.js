import { useContext } from 'react';
import { AccordionContext } from 'react-bootstrap';


import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';


export default function ContextAwareToggle({ eventKey }) {
    const currentEventKey = useContext(AccordionContext);
    const isCurrentEventKey = currentEventKey === eventKey;
    return isCurrentEventKey ? <FaMinusCircle /> : <FaPlusCircle />
  }
  