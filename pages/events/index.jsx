import { useRouter } from "next/router";
import { useState } from "react";

function Events({ eventList }) {
    const [event , setEvents] = useState(eventList);
    const [inputValue , setInputValue] = useState('');
    const [category , setCategory] = useState('');
    const [remote , setRemote] = useState(false);

    const router = useRouter();
    const fetchSportsEvent = async(e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:4000/events?${inputValue.length ? `category=${inputValue}`: '' }`)
        const data = await response.json();

        setEvents(data); 
        router.push(`/events?category=${inputValue}` , undefined , { shallow:true })
    }

    console.log(event)
    console.log(eventList)

  return (
    <div>
      <form >
        <input type='text' placeholder="name jop" onChange={(e) => setInputValue(e.target.value)} />
        <input type='text' placeholder="category" onChange={(e) => setCategory(e.target.value)} />
        <input type='checkbox' onChange={e => setRemote(!remote)}  />
        <button onClick={(e) => fetchSportsEvent(e)}>
            click
        </button>
      </form>
      <h1>list of events</h1>
      <button onClick={fetchSportsEvent}>sports</button>
      {event.map((event) => {
        return (
          <div key={event.id}>
            <h2 >
              {event.id} - {event.title} - {event.category}
            </h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Events;

export async function getServerSideProps(context) {
    const {query} = context;
    const {category} = query;
    console.log(category)
    const queryString = category ? `?category=${category}` : ' '

  const response = await fetch(`http://localhost:4000/events${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}