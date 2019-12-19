import Component from "@glimmer/component";

export default class DojoCalendar extends Component {
  get dates() {
    const dates  = [];

    for (let index = 1; index <= 31; index++) {
      const date = `2019-${this.args.month}-${index}`
      const dojo = this.args.dojos.find((dojo) => dojo.date === date);

      const person = dojo ? dojo.person : "";
      const displayValue = `${date} ${person}`

      dates.push(displayValue);
    }

    return dates;
  }
}
