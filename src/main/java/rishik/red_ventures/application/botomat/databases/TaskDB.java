package rishik.red_ventures.application.botomat.databases;

import org.springframework.data.jpa.repository.JpaRepository;
import rishik.red_ventures.application.botomat.Task;

public interface TaskDB extends JpaRepository<Task, Integer> {
}
