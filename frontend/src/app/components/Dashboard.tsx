import { WelcomeSection } from './WelcomeSection';
import { UploadSection } from './UploadSection';
import { RightSidebar } from './RightSidebar';

export function Dashboard() {
  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-6 px-4 md:px-6 pb-6 overflow-hidden">
      <div className="flex-1 overflow-y-auto pr-0 lg:pr-2">
        <WelcomeSection />
        <UploadSection />
      </div>

      <div className="overflow-y-auto lg:block hidden">
        <RightSidebar />
      </div>
    </div>
  );
}
