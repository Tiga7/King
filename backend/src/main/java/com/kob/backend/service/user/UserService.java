package com.kob.backend.service.user;

import com.baomidou.mybatisplus.extension.service.IService;
import com.kob.backend.pojo.OrdinaryUser;

import java.util.List;

public interface UserService {
    List<OrdinaryUser> getList();
}
