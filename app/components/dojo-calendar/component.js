import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DojoCalendar extends Component {
  @tracked dates;
  @tracked selectedDate;
  @tracked currentMonth = 1;

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

  constructor() {
    super(...arguments);
    const dates  = [];

    for (let index = 1; index <= 31; index++) {
      const date = `2019-12-${index}`
      dates.push(date);
    }

    this.dates = dates;
  }

  @action
  selectDate(date) {
    this.selectedDate = date;
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
