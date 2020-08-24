package rishik.red_ventures.application.botomat;

import javax.persistence.*;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Entity
public class Robot {
    private @Id @GeneratedValue Integer id;
    private String name;
    private RobotTypes robotTypes;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Task> tasks;
    private int totalTasksCompleted;

    public Robot() {}

    public Robot(String name, RobotTypes robotTypes) {
        this.name = name;
        this.robotTypes = robotTypes;
    }

    public String getName() {
        return name;
    }

    public RobotTypes getRobotTypes() {
        return robotTypes;
    }

    public Integer getId() {
        return id;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public int getTotalTasksCompleted() {
        return totalTasksCompleted;
    }

    public void addTask(Task task) {
        tasks.add(task);
    }

    public void startTasks() throws InterruptedException {
        for (Iterator<Task> iterator = this.tasks.iterator(); iterator.hasNext();) {
            Task task = iterator.next();
            TimeUnit.MILLISECONDS.sleep(task.getEta());
            totalTasksCompleted++;
            iterator.remove();
        }
    }

    public boolean equals(Robot robot) {
        return robot.name.equals(this.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.robotTypes);
    }

    @Override
    public String toString() {
        return this.name + " is of type " + this.robotTypes;
    }
}
