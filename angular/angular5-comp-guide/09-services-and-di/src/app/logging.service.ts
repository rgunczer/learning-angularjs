export class LoggingService {
  logStatusChange(status: string) {
    console.log('AA server status changed, new status: ' + status);
  }
}
