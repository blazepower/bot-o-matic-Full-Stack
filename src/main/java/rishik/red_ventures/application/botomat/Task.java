package rishik.red_ventures.application.botomat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Task {
    private String description;
    private int eta;
    private @Id @GeneratedValue Integer id;

    public Task(String description, int eta) {
        this.description = description;
        this.eta = eta;
    }

    public Task() {}

    public int getEta() {
        return eta;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return "Task{" +
                "description='" + description + '\'' +
                ", eta=" + eta +
                '}';
    }
}
