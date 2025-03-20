---
categories: Original
date: 2024-10-19T00:00:00Z
tags:
  - Go
  - 信息技术
slug: go-unexported-function
title: 在 Go 中使用未导出的函数
---

[Docs](https://pkg.go.dev/cmd/compile)

```go
package handler

import (
	"net/http"
	"os"
	"strings"
	_ "unsafe"

	_ "github.com/hoppscotch/proxyscotch/libproxy"
)

//go:linkname proxyHandler github.com/hoppscotch/proxyscotch/libproxy.proxyHandler
func proxyHandler(w http.ResponseWriter, r *http.Request)

//go:linkname accessToken github.com/hoppscotch/proxyscotch/libproxy.accessToken
var accessToken string

//go:linkname allowedOrigins github.com/hoppscotch/proxyscotch/libproxy.allowedOrigins
var allowedOrigins []string

//go:linkname bannedOutputs github.com/hoppscotch/proxyscotch/libproxy.bannedOutputs
var bannedOutputs []string

//go:linkname bannedDests github.com/hoppscotch/proxyscotch/libproxy.bannedDests
var bannedDests []string

func Handler(w http.ResponseWriter, r *http.Request) {
	if os.Getenv("ACCESS_TOKEN") != "" {
		accessToken = os.Getenv("ACCESS_TOKEN")
	}
	if os.Getenv("ALLOWED_ORIGINS") != "" {
		allowedOrigins = strings.Split(os.Getenv("ALLOWED_ORIGINS"), ",")
	} else {
		allowedOrigins = []string{"*"}
	}
	if os.Getenv("BANNED_OUTPUTS") != "" {
		bannedOutputs = strings.Split(os.Getenv("BANNED_OUTPUTS"), ",")
	}
	if os.Getenv("BANNED_DESTINATIONS") != "" {
		bannedDests = strings.Split(os.Getenv("BANNED_DESTINATIONS"), ",")
	}
	proxyHandler(w, r)
}
```
