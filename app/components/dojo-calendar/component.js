import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DojoCalendar extends Component {
  @tracked dates;
  @tracked selectedDate;

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
}
