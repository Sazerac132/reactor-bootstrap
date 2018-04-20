import * as React from "react";
import TodoTable from './TodoTable';

const styles = require('./style.scss');

interface TodoListProps {}

interface TodoListState {
    nextId: number,
    tasks: Task[]
}

export default class TodoList extends React.Component<TodoListProps, TodoListState> {

    constructor(props: TodoListProps) {
        super(props);

        this.state = {
            nextId: 4,
            tasks: [
                {
                    id: 0,
                    name: 'Prepare React demo',
                    done: true
                },
                {
                    id: 1,
                    name: 'Eat lunch',
                    done: true
                },
                {
                    id: 2,
                    name: 'Study French',
                    done: false
                },
                {
                    id: 3,
                    name: 'Clean fish tank',
                    done: true
                }
            ]
        };

        this.render = this.render.bind(this);
        this.updateText = this.updateText.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.removeTask = this.removeTask.bind(this);

    }

    render() {
        let {tasks} = this.state;

        let numTasks = tasks.length;
        let completedTasks = tasks.filter((task: Task) => task.done).length;

        return (
            <div className={styles.wrapper}>
                <TodoTable
                    tasks={tasks}
                    toggleTask={this.toggleTask}
                    removeTask={this.removeTask}
                />
                <div className={styles.announcer}>I have completed {completedTasks} out of {numTasks} tasks. {
                    completedTasks >= numTasks && 'Yay!'
                }</div>
            </div>
        );
    }

    updateText(id: number, name: string): void {

    }

    addTask(name: string): void {
        let {tasks, nextId} = this.state;

        this.setState({
            nextId: nextId + 1,
            tasks: [...tasks, {
                id: nextId,
                name,
                done: false
            }]
        });
    }

    toggleTask(id: number): void {
        let {tasks} = this.state;

        this.setState({
            tasks: tasks.map(task => (
                task.id === id ? { ...task, done: !task.done } : task
            ))
        });
    }

    removeTask(id: number): void {
        let {tasks} = this.state;

        this.setState({
            tasks: tasks.filter(task => (
                task.id !== id
            ))
        })
    }

}