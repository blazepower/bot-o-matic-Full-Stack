package rishik.red_ventures.application.botomat.databases;

import org.springframework.data.jpa.repository.JpaRepository;
import rishik.red_ventures.application.botomat.Robot;

public interface RobotDB extends JpaRepository<Robot, Integer> {
}
