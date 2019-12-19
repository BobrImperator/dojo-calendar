import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DojoCalendar extends Component {
  @tracked selectedDate;
  @tracked currentMonth = 1;
  
  @tracked
  newEventForm = {};

  @tracked
  dojos = [
    {
      name: "Dojo 223",
      date: "2019-11-20",
      person: "Mikoscz"
    }
  ];

  months = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ]


  @action
  selectDate(date) {
    this.selectedDate = date;

    this.setField("date", date);
  }

  @action
  createDojo(event) {
    const { dojos } = this;
    event.preventDefault();

    dojos.push(this.newEventForm);

    this.dojos = dojos;
    this.newEventForm = {};
  }

  @action
  setField(formProperty, event) {
    const { newEventForm } = this;

    if (typeof event === "object") {
      newEventForm[formProperty] = event.target.value;
    } else {
      newEventForm[formProperty] = event;
    }

    this.newEventForm = newEventForm;
  }

  @action
  nextMonth() {
    const { currentMonth } = this;

    if (currentMonth < 12) {
      this.currentMonth = currentMonth + 1;
    }
  }

  @action
  previousMonth() {
    const { currentMonth } = this;
    
    if (currentMonth > 1) {
      this.currentMonth = currentMonth - 1;
    }
  }
}
