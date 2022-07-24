import { EventItem } from '../models/event-item.model';
import { EventAction, EventActionType } from '../actions/event.action';
// //create a dummy initial state

export const initialState: Array<EventItem> = [
  {
     "id":"122",
     "date":"2022-07-20T10:36:25.387Z",
     "availableticketsCount":0,
     "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-1.png",
     "title":"Understanding Color Theory: The Color Wheel and findings"
  },
  {
     "id":"16z",
     "date":"2022-08-20T10:36:25.387Z",
     "availableticketsCount":7,
     "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-2.png",
     "title":"RGD design thinkers"
  },
  {
    "id":"345",
    "date":"2022-08-20T10:36:25.387Z",
    "availableticketsCount":8,
    "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-3.png",
    "title":"What design can do"
  },
  {
    "id":"439",
    "date":"2022-08-20T10:36:25.387Z",
    "availableticketsCount":2,
    "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-4.png",
    "title":"Perth Design Camp"
  },
  {
    "id":"455",
    "date":"2022-08-20T10:36:25.387Z",
    "availableticketsCount":5,
    "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-5.png",
    "title":"Monolith - An analysis"
  },
  {
    "id":"435",
    "date":"2022-08-20T10:36:25.387Z",
    "availableticketsCount":9,
    "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-6.png",
    "title":"Design Indaba Conference"
  },{
    "id":"495",
    "date":"2022-08-20T10:36:25.387Z",
    "availableticketsCount":53,
    "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-7.png",
    "title":"The future of IOT"
  },{
    "id":"415",
    "date":"2022-08-20T10:36:25.387Z",
    "availableticketsCount":18,
    "imageSrc": "https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/event-8.png",
    "title":"Design Systems - An overview"
  }
];

export function EventReducer(
  state: Array<EventItem> = initialState,
  action: EventAction
): EventItem[] {
  switch (action.type) {
    case 'EDIT_ITEM':
      return state.map((item, index) => ({
       id: item.id,
       date: item.date,
       title: item.title,
       availableticketsCount: action.payload?.id === item.id ? action.payload?.availableticketsCount : item.availableticketsCount
      }));
    default:
      return state;
  }
}
