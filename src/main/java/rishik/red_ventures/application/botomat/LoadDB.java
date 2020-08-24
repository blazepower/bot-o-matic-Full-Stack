package rishik.red_ventures.application.botomat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import rishik.red_ventures.application.botomat.databases.RobotDB;
import rishik.red_ventures.application.botomat.databases.TaskDB;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class LoadDB {

    private static final Logger log = LoggerFactory.getLogger(LoadDB.class);
    private List<Task> tasks = new ArrayList<>();

    @Bean
    CommandLineRunner initDatabase(RobotDB robotDB, TaskDB taskDB) {
        this.tasks.add(new Task("do the dishes", 1000));
        this.tasks.add(new Task("sweep the house", 3000));
        this.tasks.add(new Task("do the laundry", 10000));
        this.tasks.add(new Task("take out the recycling", 4000));
        this.tasks.add(new Task("make a sammich", 7000));
        this.tasks.add(new Task("mow the lawn", 20000));
        this.tasks.add(new Task("rake the leaves", 18000));
        this.tasks.add(new Task("give the dog a bath", 14500));
        this.tasks.add(new Task("bake some cookies", 8000));
        this.tasks.add(new Task("wash the car", 20000));
        return args -> {
            // log.info("Preloading " + robotDB.save(new Robot("test", RobotTypes.AERONAUTICAL)));
            for (Task task : tasks) {
                log.info("Preloading " + taskDB.save(task));
            }
        };
    }
}
