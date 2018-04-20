import * as React from "react";

const styles = require('./style.scss');

interface TodoTableProps {
    tasks: Task[];
    toggleTask(id: number): void;
    removeTask(id: number): void;
}

interface TodoTableState {}

export default class TodoTable extends React.Component<TodoTableProps, TodoTableState> {

    constructor(props: TodoTableProps) {
        super(props);
    }

    render() {
        let {
            tasks,
            toggleTask,
            removeTask
        } = this.props;

        return (
            <table className={styles.todoTable}>
                <thead>
                <tr>
                    <th>Task</th><th>Completed</th><th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {
                    (tasks.length > 0) && tasks.map(task => {
                        let {id, name, done} = task;
                        return <tr key={id}>
                            <td>{name}</td>
                            <td><input type="checkbox" checked={done} onChange={() => toggleTask(id)}/></td>
                            <td><i className="fa fa-times-circle" onClick={() => removeTask(id)}/></td>
                        </tr>})
                }
                </tbody>
            </table>
        )
    }

}