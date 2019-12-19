import Component from "@glimmer/component";

export default class DojoCalendar extends Component {
  get dates() {
    const dates  = [];

    for (let index = 1; index <= 31; index++) {
      const date = `2019-${this.args.month}-${index}`
      dates.push(date);
    }

    return dates;
  }
}
