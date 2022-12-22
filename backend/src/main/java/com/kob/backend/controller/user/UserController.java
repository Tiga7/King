package com.kob.backend.controller.user;

import com.kob.backend.pojo.OrdinaryUser;
import com.kob.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class UserController {
    @Resource
    private UserService userService;

    @GetMapping("api/user/token/")
    public List<OrdinaryUser> getList(){
        System.out.println("hello");
        return userService.getList();
    }
}
