package com.kob.backend.config.userutils;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import com.kob.backend.mapper.UserMapper;
import com.kob.backend.pojo.OrdinaryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author Gan
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserMapper userMapper;

    /**
     * 这个方法主要用于从系统数据中查询并加载具体的用户到Spring Security中。
     * username这个参数是从UsernamePasswordAuthenticationToken中传过来的
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        QueryWrapper<OrdinaryUser> queryWrapper = new QueryWrapper<>();

        //修改登录权限 对应security的username
//        if (username.length() == 9) {
//            queryWrapper.eq("sno", username);
//        } else if (username.length() == 11) {
//            queryWrapper.eq("phone", username);
//        } else {
//            queryWrapper = null;
//        }

        queryWrapper.eq("sno", username);
        OrdinaryUser user = userMapper.selectOne(queryWrapper);

        if (user == null) {
            throw new UsernameNotFoundException("用户不存在");
        }

        return new UserDetailsImpl(user);
    }
}
