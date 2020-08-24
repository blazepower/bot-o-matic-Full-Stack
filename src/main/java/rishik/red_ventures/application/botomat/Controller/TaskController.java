package rishik.red_ventures.application.botomat.Controller;

import org.springframework.web.bind.annotation.*;
import rishik.red_ventures.application.botomat.Task;
import rishik.red_ventures.application.botomat.databases.TaskDB;

import java.util.List;

@RestController
public class TaskController {

    private final TaskDB taskDB;

    TaskController(TaskDB taskDB) {
        this.taskDB = taskDB;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/task/getTasks")
    List<Task> getTasks() {
        return taskDB.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/api/task/addTask")
    public Task addTask(@RequestParam String description, @RequestParam int eta) {
        return taskDB.save(new Task(description, eta));
    }
}
