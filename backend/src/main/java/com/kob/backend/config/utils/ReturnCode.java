package com.kob.backend.config.utils;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public enum ReturnCode {
    /**
     * 操作成功
     **/
    SUCCESS(200, "success"),
    /**
     * 操作失败
     **/
    FAIL(500, "failed"),


    RETURN_CODE_200(200, "success"),
    RETURN_CODE_400(400, "request error"),
    /**
     * no authentication
     */
    RETURN_CODE_401(401, "匿名用户访问无权限资源时的异常"),
    /**
     * no authorities
     **/
    RETURN_CODE_403(403, "无访问权限,请激活该用户,或者联系管理员授予权限"),
    RETURN_CODE_404(404, "path not found"),
    /**
     * 服务异常
     **/
    RETURN_CODE_500(500, "server error,please try again later"),

    INVALID_TOKEN(2001, "访问令牌不合法"),
    ACCESS_DENIED(2003, "没有权限访问该资源"),
    CLIENT_AUTHENTICATION_FAILED(1001, "客户端认证失败"),
    USERNAME_OR_PASSWORD_ERROR(1002, "account error"),
    UNSUPPORTED_GRANT_TYPE(1003, "不支持的认证模式");

    public static final List<ReturnCode> RETURN_CODE_LIST = Collections.unmodifiableList(
            Arrays.asList(RETURN_CODE_200, RETURN_CODE_400, RETURN_CODE_401, RETURN_CODE_404, RETURN_CODE_403, RETURN_CODE_500));
    /**
     * 自定义状态码
     **/
    private final Integer code;
    /**
     * 自定义描述
     **/
    private final String message;

    ReturnCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
