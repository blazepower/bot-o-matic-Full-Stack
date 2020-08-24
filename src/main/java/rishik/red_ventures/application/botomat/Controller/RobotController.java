package rishik.red_ventures.application.botomat.Controller;

import javassist.NotFoundException;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;
import rishik.red_ventures.application.botomat.Robot;
import rishik.red_ventures.application.botomat.Task;
import rishik.red_ventures.application.botomat.databases.RobotDB;
import rishik.red_ventures.application.botomat.RobotTypes;

import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
public class RobotController {

    private final RobotDB robotDB;

    RobotController(RobotDB robotDB) {
        this.robotDB = robotDB;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/robot/robots")
    CollectionModel<EntityModel<Robot>> allRobots() {
        
        List<EntityModel<Robot>> robots = robotDB.findAll().stream()
                .map(robot -> EntityModel.of(robot,
                        linkTo(methodOn(RobotController.class).allRobots()).withRel("robots")))
                        .collect(Collectors.toList());
        return CollectionModel.of(robots, linkTo(methodOn(RobotController.class).allRobots()).withSelfRel());
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/robot/getRobotTypes")
    RobotTypes[] allRobotTypes() {
        return RobotTypes.values();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/api/robot/createRobot")
    public Robot createRobot(@RequestParam String name, @RequestParam RobotTypes robotTypes){
        return robotDB.save(new Robot(name, robotTypes));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/api/robot/createRobot/{id}/addTasks")
    public Robot addTasks(@RequestBody Task[] tasks, @PathVariable Integer id) {
        Robot currRobot = robotDB.findById(id).orElseThrow(RuntimeException::new);
        for (Task task : tasks) {
            currRobot.addTask(task);
        }
        return robotDB.save(currRobot);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/api/robot/{id}/completeTasks")
    public Robot completeTasks(@PathVariable Integer id) throws InterruptedException {
        Robot currRobot = robotDB.findById(id).orElseThrow(RuntimeException::new);
        currRobot.startTasks();
        return robotDB.save(currRobot);
    }
}
