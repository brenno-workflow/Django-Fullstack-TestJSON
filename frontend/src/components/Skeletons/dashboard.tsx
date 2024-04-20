export function SkeletonDashboard() {
  return (
    <main className="w-full h-screen">
      <div className="w-full flex justify-center py-16 h-full">
        <div className="max-w-screen-md w-full flex flex-col gap-8 items-center justify-between px-4 md:px-0 animate-pulse">
          <div className="flex flex-col w-full gap-8">
            <div className="w-full justify-start">
              <div className="h-12 bg-slate-300 rounded max-w-16"></div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="w-2/3 md:w-1/2 rounded-md">
                <div className="bg-slate-300 h-2 rounded"></div>
              </div>
              <div className="w-1/4 rounded">
                <div className="bg-slate-300 h-2 rounded"></div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between w-full gap-4">
                <div className="bg-slate-300 h-6 flex-1 rounded"></div>
                <div className="bg-slate-300 h-6 w-1/12 rounded"></div>
              </div>
              <div className="flex justify-between w-full gap-4">
                <div className="bg-slate-300 h-6 flex-1 rounded"></div>
                <div className="bg-slate-300 h-6 w-1/12 rounded"></div>
              </div>
              <div className="flex justify-between w-full gap-4">
                <div className="bg-slate-300 h-6 flex-1 rounded"></div>
                <div className="bg-slate-300 h-6 w-1/12 rounded"></div>
              </div>
              <div className="flex justify-between w-full gap-4">
                <div className="bg-slate-300 h-6 flex-1 rounded"></div>
                <div className="bg-slate-300 h-6 w-1/12 rounded"></div>
              </div>
              <div className="flex justify-between w-full gap-4">
                <div className="bg-slate-300 h-6 flex-1 rounded"></div>
                <div className="bg-slate-300 h-6 w-1/12 rounded"></div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="w-1/3 md:w-1/5 p-4 rounded bg-slate-300"></div>
            <div className="w-1/3 md:w-1/5 p-4 rounded bg-slate-300"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
