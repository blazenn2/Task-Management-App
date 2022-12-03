# Pages Documentation

## Board page
### State Management

The Board page contains 4 different states and each of them are used for re-rendering purpose. To make changes to components, such as animations, addition/deletion are done using useRef hook.

| `State`                   | `Description`                    |
| ------------------------- | -------------------------------- |
| `boardData`               | This is the main state containing an array of objects of all information in the board  |
| `newTaskParticipants`     | It contains all participants of a team. This is made specifically when the user is building a new task.  |
| `addRemoveParticipants`   | It also contains participants of a team but this one is reflected on add/remove participants modal.  |
| `participantsList`        | In add/remove participants, you will see a list of participants already working on that task. That list is generated  using this state. This is a serving state, meaning it takes value from boardData and saves it inside.  |

## This document will be updated in near future ##