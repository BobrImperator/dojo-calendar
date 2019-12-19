import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';

export default class DojoCalendar extends Component {
  @tracked dates;

  constructor() {
    super(...arguments);
    const dates  = [];

    for (let index = 1; index <= 31; index++) {
      const date = `2019-12-${index}`
      dates.push(date);
    }

    this.dates = dates;
  }
}
