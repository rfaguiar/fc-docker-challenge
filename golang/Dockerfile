FROM golang:1.15 as builder

WORKDIR /go/src

COPY app.go ./app.go
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM scratch

WORKDIR /go/src

COPY --from=builder /go/src/app .

ENTRYPOINT [ "./app" ]