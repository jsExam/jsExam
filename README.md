# jsExam - jExam enrollment schedules at a glance 👀

*jsExam offers a way to view more detailled information on jExam enrollment schedules.*

## Features
- [x] See, when enrollment starts
- [x] See, when enrollment ends

Optional and maybe added in the future:
- [ ] Search for lectures directly by name

Feature Requests are welcome via the [Issues](https://github.com/jsExam/jsExam/issues) panel.

## Quickstart

1. Visit [jExam](https://jexam.inf.tu-dresden.de/de.jexam.web.v4.5/spring/welcome) and find out the ID of the desired lecture via a html inspector of your choice.
2. Copy that ID and paste it to our [App](https://jsexam.github.io/jsExam/). The App searches automatically for that lecture and displays further information.

## How does it work?

jsExam is a prettified interface to the `getLectures` `ajax` json interface of jExam, which is accessible under `/de.jexam.web.v4.5/spring/lectures/ajax`. To conform to cross origin policies, jsExam tunnels all requests to jExam via an [API](https://github.com/jsExam/jsExam/tree/master/api).

## License

[Apache-2.0](https://github.com/jsExam/jsExam/blob/master/LICENSE)

## Legal disclaimer

jsExam does not permanently store any user specific information.

#### This service comes without any warranty. If the jExam team requests a takedown of this activity, we will be consient.
