import Component from "@glimmer/component";

export default class DojoCalendar extends Component {
  helloFromComponent = "Hi"

  get getHello() {
    return this.args.hello;
  }
}
