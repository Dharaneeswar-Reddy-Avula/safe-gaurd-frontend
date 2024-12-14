import { Card } from './card'
import Brother from '../assets/brother.svg';
import Father from '../assets/father.svg';
import Mother from '../assets/mother.svg';
import Friend from '../assets/friend.svg';

export const Chatbot = () => {
  return (
    <div className='flex md:justify-between flex-wrap justify-center'>
        <Card image={Brother}/>
        <Card image={Father}/>
        <Card image={Mother}/>
        <Card image={Friend}/>
    </div>
  )
}
