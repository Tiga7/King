package com.kob.backend.service.impl.user;

import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.OrdinaryUser;
import com.kob.backend.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Override
    public List<OrdinaryUser> getList() {

        return userMapper.selectList(null);

    }
}
